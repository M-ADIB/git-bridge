// --- Supabase Config ---
const SUPABASE_URL = 'https://uaqdwpsammcqrlyzstlj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcWR3cHNhbW1jcXJseXpzdGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0OTM5NjYsImV4cCI6MjA5NjA2OTk2Nn0.eVqT47zk1J8LRtK_y0kveMW6eCOn5zZZSiQklWouC68';
const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

// --- State Variables ---
let currentSpotlightMediaType = 'youtube'; // 'youtube' or 'audio'
let selectedAudioFile = null;
let currentSpotlightData = null;
let existingAudioUrl = null;
let allSubmissions = [];
let activeTypeFilter = 'all';
let activeStatusFilter = 'all';
let activeSearchQuery = '';
let selectedSubmission = null;

// --- DOM Elements ---
const typeYoutubeBtn = document.getElementById('type-youtube-btn');
const typeAudioBtn = document.getElementById('type-audio-btn');
const panelYoutube = document.getElementById('panel-youtube');
const panelAudio = document.getElementById('panel-audio');

const spotlightForm = document.getElementById('spotlight-form');
const spotlightTitleEn = document.getElementById('spotlight-title-en');
const spotlightTitleAr = document.getElementById('spotlight-title-ar');
const spotlightDescEn = document.getElementById('spotlight-desc-en');
const spotlightDescAr = document.getElementById('spotlight-desc-ar');
const spotlightYoutubeUrl = document.getElementById('spotlight-youtube-url');
const spotlightAudioFile = document.getElementById('spotlight-audio-file');
const saveSpotlightBtn = document.getElementById('save-spotlight-btn');
const spotlightSpinner = document.getElementById('spotlight-spinner');

const dropzone = document.getElementById('dropzone');
const selectedFileBadge = document.getElementById('selected-file-badge');
const selectedFilename = document.getElementById('selected-filename');
const removeFileBtn = document.getElementById('remove-file-btn');

const uploadProgressContainer = document.getElementById('upload-progress-container');
const uploadProgressBar = document.getElementById('upload-progress-bar');
const progressStatus = document.getElementById('progress-status');
const progressPercent = document.getElementById('progress-percent');

// Preview DOM elements
const previewTitle = document.getElementById('preview-title');
const previewDesc = document.getElementById('preview-desc');
const previewThumbImg = document.getElementById('preview-thumb-img');
const previewThumbBox = document.getElementById('preview-thumb-box');

// Ticker DOM elements
const tickerForm = document.getElementById('ticker-form');
const tickerYoutubeUrl = document.getElementById('ticker-youtube-url');
const tickerTitleEn = document.getElementById('ticker-title-en');
const tickerTitleAr = document.getElementById('ticker-title-ar');
const tickerPosition = document.getElementById('ticker-position');
const addTickerBtn = document.getElementById('add-ticker-btn');
const tickerSpinner = document.getElementById('ticker-spinner');
const tickerCount = document.getElementById('ticker-count');
const tickerListContainer = document.getElementById('ticker-list-container');
const tickerEmptyPlaceholder = document.getElementById('ticker-empty-placeholder');

// --- Helper Functions ---

// Extractor for YouTube ID
function getYouTubeId(url) {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
}

// Beautiful Notification Toast
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icon = type === 'success' 
    ? `<svg class="toast-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
    : `<svg class="toast-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`;
    
  toast.innerHTML = `
    ${icon}
    <span class="toast-message">${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Trigger animations
  setTimeout(() => toast.classList.add('show'), 50);
  
  // Remove after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// Disable forms during actions
function setPendingState(isPending, spinner, button) {
  if (isPending) {
    spinner.classList.add('visible');
    button.disabled = true;
  } else {
    spinner.classList.remove('visible');
    button.disabled = false;
  }
}

// --- Dynamic Spotlight UI Updates ---

// Select YouTube vs Audio
function selectMediaType(type) {
  currentSpotlightMediaType = type;
  
  if (type === 'youtube') {
    typeYoutubeBtn.classList.add('active');
    typeAudioBtn.classList.remove('active');
    
    panelYoutube.classList.add('active');
    panelAudio.classList.remove('active');
    
    spotlightYoutubeUrl.required = true;
    spotlightAudioFile.required = false;
  } else {
    typeYoutubeBtn.classList.remove('active');
    typeAudioBtn.classList.add('active');
    
    panelYoutube.classList.remove('active');
    panelAudio.classList.add('active');
    
    spotlightYoutubeUrl.required = false;
    // Audio file is only required if we don't already have an uploaded audio file
    spotlightAudioFile.required = !existingAudioUrl;
  }
  
  updateLivePreview();
}

function updateLivePreview() {
  const title = spotlightTitleEn.value.trim() || 'Latest Episode Spotlight';
  const desc = spotlightDescEn.value.trim() || 'No description entered yet.';
  
  previewTitle.textContent = title;
  previewDesc.textContent = desc;
  
  if (currentSpotlightMediaType === 'youtube') {
    const videoId = getYouTubeId(spotlightYoutubeUrl.value.trim());
    if (videoId) {
      previewThumbImg.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
      previewThumbImg.style.display = 'block';
      previewThumbBox.querySelector('svg').style.display = 'none';
    } else {
      previewThumbImg.style.display = 'none';
      previewThumbBox.querySelector('svg').style.display = 'block';
    }
  } else {
    // Show Audio player visual mockup
    previewThumbImg.style.display = 'none';
    previewThumbBox.querySelector('svg').style.display = 'block';
  }
}

// --- Drag & Drop Handlers ---

function handleFileSelection(file) {
  if (!file) return;
  
  // Basic validation
  if (!file.type.startsWith('audio/')) {
    showToast('Invalid file format. Please upload an audio file.', 'error');
    return;
  }
  
  selectedAudioFile = file;
  selectedFilename.textContent = file.name;
  
  // Update badge UI
  dropzone.style.display = 'none';
  selectedFileBadge.style.display = 'flex';
  
  // Since user uploaded a file, we satisfy the requirement
  spotlightAudioFile.required = false;
}

function resetFileSelection() {
  selectedAudioFile = null;
  spotlightAudioFile.value = '';
  dropzone.style.display = 'block';
  selectedFileBadge.style.display = 'none';
  
  // Re-evaluate required state
  spotlightAudioFile.required = !existingAudioUrl;
}

// --- Database Operations ---

// Load current spotlight data
async function loadSpotlightData() {
  if (!supabaseClient) {
    showToast('Supabase client is not initialized.', 'error');
    return;
  }
  
  try {
    const { data, error } = await supabaseClient
      .from('rania_latest_episode')
      .select('*')
      .eq('id', 1)
      .single();
      
    if (error) throw error;
    
    if (data) {
      currentSpotlightData = data;
      spotlightTitleEn.value = data.title_en || '';
      spotlightTitleAr.value = data.title_ar || '';
      spotlightDescEn.value = data.description_en || '';
      spotlightDescAr.value = data.description_ar || '';
      
      if (data.type === 'audio') {
        existingAudioUrl = data.audio_url;
        selectMediaType('audio');
        if (existingAudioUrl) {
          // Mock selected file badge for existing audio file
          const fileName = existingAudioUrl.split('/').pop() || 'existing_audio_file.mp3';
          selectedFilename.textContent = `Active File: ${fileName}`;
          dropzone.style.display = 'none';
          selectedFileBadge.style.display = 'flex';
          spotlightAudioFile.required = false;
        }
      } else {
        spotlightYoutubeUrl.value = data.youtube_url || '';
        selectMediaType('youtube');
      }
      
      updateLivePreview();
    }
  } catch (err) {
    console.error('Error fetching spotlight data:', err);
    showToast('Failed to load spotlight details from database.', 'error');
  }
}

// Save spotlight config
async function saveSpotlightConfig() {
  if (!supabaseClient) return;
  
  const titleEn = spotlightTitleEn.value.trim();
  const titleAr = spotlightTitleAr.value.trim();
  const descEn = spotlightDescEn.value.trim();
  const descAr = spotlightDescAr.value.trim();
  
  setPendingState(true, spotlightSpinner, saveSpotlightBtn);
  
  try {
    let audioUrl = existingAudioUrl;
    
    // If audio media type is selected AND a new file was chosen, upload it
    if (currentSpotlightMediaType === 'audio' && selectedAudioFile) {
      uploadProgressContainer.style.display = 'block';
      progressStatus.textContent = 'Uploading broadcast audio file...';
      progressPercent.textContent = '0%';
      uploadProgressBar.style.width = '0%';
      
      // Clean up file name
      const cleanName = selectedAudioFile.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const filePath = `spotlight_audio_${Date.now()}_${cleanName}`;
      
      // Perform Storage upload
      const { data: uploadData, error: uploadError } = await supabaseClient.storage
        .from('rania_episodes')
        .upload(filePath, selectedAudioFile, {
          cacheControl: '3600',
          upsert: true,
          onUploadProgress: (progressEvent) => {
            const percent = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            progressPercent.textContent = `${percent}%`;
            uploadProgressBar.style.width = `${percent}%`;
            if (percent === 100) {
              progressStatus.textContent = 'Processing file details...';
            }
          }
        });
        
      if (uploadError) throw uploadError;
      
      // Get public URL
      const { data: urlData } = supabaseClient.storage
        .from('rania_episodes')
        .getPublicUrl(filePath);
        
      audioUrl = urlData.publicUrl;
      existingAudioUrl = audioUrl; // update cache
      
      // Reset selected file state after successful upload
      selectedAudioFile = null;
      selectedFilename.textContent = `Active File: ${cleanName}`;
      
      progressStatus.textContent = 'Upload complete! Updating database...';
      progressPercent.textContent = '100%';
      uploadProgressBar.style.width = '100%';
    }
    
    // Prepare payload
    const payload = {
      type: currentSpotlightMediaType,
      title_en: titleEn,
      title_ar: titleAr,
      description_en: descEn,
      description_ar: descAr,
      youtube_url: currentSpotlightMediaType === 'youtube' ? spotlightYoutubeUrl.value.trim() : null,
      audio_url: currentSpotlightMediaType === 'audio' ? audioUrl : null,
      updated_at: new Date()
    };
    
    // Write update query
    const { error: updateError } = await supabaseClient
      .from('rania_latest_episode')
      .update(payload)
      .eq('id', 1);
      
    if (updateError) throw updateError;
    
    showToast('Spotlight episode updated successfully!');
    
    // Hide progress bar slowly
    setTimeout(() => {
      uploadProgressContainer.style.display = 'none';
    }, 1000);
    
    updateLivePreview();
  } catch (err) {
    console.error('Error saving spotlight details:', err);
    showToast(err.message || 'Error occurred while saving spotlight details.', 'error');
    uploadProgressContainer.style.display = 'none';
  } finally {
    setPendingState(false, spotlightSpinner, saveSpotlightBtn);
  }
}

// Load Previous Episodes Marquee Ticker list
async function loadTickerList() {
  if (!supabaseClient) return;
  
  try {
    const { data, error } = await supabaseClient
      .from('rania_episodes')
      .select('*')
      .order('position', { ascending: true });
      
    if (error) throw error;
    
    tickerCount.textContent = `${data.length} item${data.length !== 1 ? 's' : ''}`;
    
    // Update dashboard metrics card count
    const dashboardEpisodesCount = document.getElementById('dashboard-active-episodes-count');
    if (dashboardEpisodesCount) {
      dashboardEpisodesCount.textContent = data.length;
    }
    
    tickerListContainer.innerHTML = '';
    
    if (data.length === 0) {
      tickerListContainer.appendChild(tickerEmptyPlaceholder);
      tickerEmptyPlaceholder.querySelector('div').textContent = 'No episodes in ticker. Add one above!';
      return;
    }
    
    data.forEach(episode => {
      const videoId = getYouTubeId(episode.youtube_url);
      const row = document.createElement('div');
      row.className = 'db-episode-row';
      row.id = `db-row-${episode.id}`;
      
      const thumbUrl = videoId 
        ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
        : 'assets/rania_hero.png';
        
      row.innerHTML = `
        <img src="${thumbUrl}" class="db-thumb" alt="Thumbnail" onerror="this.src='assets/rania_hero.png';">
        <div class="db-info">
          <div class="db-title">${episode.title_en || 'Untitled Episode'}</div>
          <div style="font-size:0.75rem; color:var(--text-secondary);">${episode.title_ar || ''}</div>
          <div class="db-position">Pos: ${episode.position}</div>
        </div>
        <button type="button" class="delete-btn" data-id="${episode.id}" title="Remove Episode">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        </button>
      `;
      tickerListContainer.appendChild(row);
    });
    
    // Wire delete buttons
    const deleteButtons = tickerListContainer.querySelectorAll('.delete-btn');
    deleteButtons.forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = btn.getAttribute('data-id');
        if (confirm('Are you sure you want to remove this episode from the marquee ticker?')) {
          await deleteTickerEpisode(id);
        }
      });
    });
    
  } catch (err) {
    console.error('Error fetching ticker list:', err);
    showToast('Failed to load ticker episodes list.', 'error');
  }
}

// Add new episode to ticker
async function addTickerEpisode() {
  if (!supabaseClient) return;
  
  const ytUrl = tickerYoutubeUrl.value.trim();
  const titleEn = tickerTitleEn.value.trim();
  const titleAr = tickerTitleAr.value.trim();
  let position = parseInt(tickerPosition.value.trim());
  
  const videoId = getYouTubeId(ytUrl);
  if (!videoId) {
    showToast('Please enter a valid YouTube video URL.', 'error');
    return;
  }
  
  setPendingState(true, tickerSpinner, addTickerBtn);
  
  try {
    // Determine position if empty
    if (isNaN(position) || position <= 0) {
      const { data: maxPosData, error: maxPosError } = await supabaseClient
        .from('rania_episodes')
        .select('position')
        .order('position', { ascending: false })
        .limit(1);
        
      if (maxPosError) throw maxPosError;
      
      const lastPos = (maxPosData && maxPosData.length > 0) ? maxPosData[0].position : 0;
      position = lastPos + 1;
    }
    
    const payload = {
      youtube_url: ytUrl,
      title_en: titleEn,
      title_ar: titleAr,
      position: position,
      created_at: new Date()
    };
    
    const { error: insertError } = await supabaseClient
      .from('rania_episodes')
      .insert([payload]);
      
    if (insertError) throw insertError;
    
    showToast('Episode added to ticker marquee successfully!');
    tickerForm.reset();
    await loadTickerList();
  } catch (err) {
    console.error('Error adding ticker episode:', err);
    showToast(err.message || 'Error occurred while adding ticker episode.', 'error');
  } finally {
    setPendingState(false, tickerSpinner, addTickerBtn);
  }
}

// Delete episode from ticker
async function deleteTickerEpisode(id) {
  if (!supabaseClient) return;
  
  try {
    const { error } = await supabaseClient
      .from('rania_episodes')
      .delete()
      .eq('id', id);
      
    if (error) throw error;
    
    showToast('Episode removed from ticker.');
    await loadTickerList();
  } catch (err) {
    console.error('Error deleting ticker episode:', err);
    showToast('Failed to delete ticker episode.', 'error');
  }
}

// --- Submissions Inbox Functions ---

async function updateSubmissionsBadgeCount() {
  if (!supabaseClient) return;
  try {
    const { count, error } = await supabaseClient
      .from('rania_submissions')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'Pending');
      
    if (error) throw error;
    
    const badgeEl = document.getElementById('submissions-badge');
    if (badgeEl) {
      if (count > 0) {
        badgeEl.textContent = count;
        badgeEl.style.display = 'inline-flex';
      } else {
        badgeEl.style.display = 'none';
      }
    }
  } catch (err) {
    console.error('Error updating badge count:', err);
  }
}

async function loadSubmissionsList() {
  if (!supabaseClient) return;
  
  const tbody = document.getElementById('submissions-list-tbody');
  if (tbody) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;">Loading submissions...</td></tr>';
  }
  
  try {
    const { data, error } = await supabaseClient
      .from('rania_submissions')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    
    allSubmissions = data || [];
    renderSubmissions();
  } catch (err) {
    console.error('Error loading submissions:', err);
    showToast('Failed to load submissions from database.', 'error');
    if (tbody) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; color:var(--accent-crimson);">Failed to load data.</td></tr>';
    }
  }
}

function renderSubmissions() {
  const tbody = document.getElementById('submissions-list-tbody');
  const emptyPlaceholder = document.getElementById('submissions-empty-placeholder');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  // Filter submissions
  const filtered = allSubmissions.filter(sub => {
    // Type filter
    if (activeTypeFilter !== 'all' && sub.type !== activeTypeFilter) return false;
    
    // Status filter
    if (activeStatusFilter !== 'all' && sub.status !== activeStatusFilter) return false;
    
    // Search filter
    if (activeSearchQuery) {
      const q = activeSearchQuery.toLowerCase();
      const name = (sub.name || '').toLowerCase();
      const email = (sub.email || '').toLowerCase();
      const company = (sub.company || '').toLowerCase();
      const profession = (sub.profession || '').toLowerCase();
      const topics = (sub.topics || '').toLowerCase();
      const message = (sub.message || '').toLowerCase();
      
      const match = name.includes(q) || 
                    email.includes(q) || 
                    company.includes(q) || 
                    profession.includes(q) || 
                    topics.includes(q) || 
                    message.includes(q);
                    
      if (!match) return false;
    }
    
    return true;
  });
  
  if (filtered.length === 0) {
    if (emptyPlaceholder) emptyPlaceholder.style.display = 'flex';
    return;
  }
  
  if (emptyPlaceholder) emptyPlaceholder.style.display = 'none';
  
  filtered.forEach(sub => {
    const tr = document.createElement('tr');
    tr.id = `sub-row-${sub.id}`;
    
    // Format date
    let dateStr = 'N/A';
    if (sub.created_at) {
      const d = new Date(sub.created_at);
      dateStr = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    }
    
    // Type badge
    const typeBadge = sub.type === 'guest' 
      ? '<span class="type-badge badge-type-guest">Guest</span>' 
      : '<span class="type-badge badge-type-sponsor">Sponsor</span>';
      
    // Status badge
    const statusClass = sub.status ? sub.status.toLowerCase() : 'pending';
    const statusBadge = `<span class="status-badge badge-${statusClass}">${sub.status || 'Pending'}</span>`;
    
    // Name / Company details
    const nameSection = sub.type === 'guest'
      ? `<div style="font-weight:600;">${sub.name || 'Anonymous'}</div><div style="font-size:0.75rem; color:var(--text-secondary);">${sub.profession || ''}</div>`
      : `<div style="font-weight:600;">${sub.name || 'Anonymous'}</div><div style="font-size:0.75rem; color:var(--accent-indigo); font-weight:500;">${sub.company || 'No Company'}</div>`;

    // Show or tier details
    const showOrTier = sub.type === 'guest'
      ? `<div style="font-size:0.8rem; font-weight:500;">${sub.show_choice || 'Any Show'}</div>`
      : `<div style="font-size:0.8rem; font-weight:600; color:var(--accent-teal);">${sub.profession || 'Sponsorship'}</div><div style="font-size:0.7rem; color:var(--text-secondary);">${sub.show_choice || ''}</div>`;

    tr.innerHTML = `
      <td>${typeBadge}</td>
      <td>${nameSection}</td>
      <td>
        <div>${sub.email || ''}</div>
        <div style="font-size:0.75rem; color:var(--text-secondary);">${sub.phone || ''}</div>
      </td>
      <td>${showOrTier}</td>
      <td>${dateStr}</td>
      <td>${statusBadge}</td>
      <td>
        <button class="tbl-action-btn view" data-id="${sub.id}" title="View Details">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
        </button>
        <button class="tbl-action-btn delete" data-id="${sub.id}" title="Delete Submission">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
  
  // Wire list buttons
  tbody.querySelectorAll('.tbl-action-btn.view').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'));
      const sub = allSubmissions.find(s => s.id === id);
      if (sub) openSubmissionDetail(sub);
    });
  });
  
  tbody.querySelectorAll('.tbl-action-btn.delete').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = parseInt(btn.getAttribute('data-id'));
      if (confirm('Are you sure you want to permanently delete this submission?')) {
        await deleteSubmission(id);
      }
    });
  });
}

function openSubmissionDetail(submission) {
  selectedSubmission = submission;
  const overlay = document.getElementById('submission-modal-overlay');
  const detailsContent = document.getElementById('modal-details-content');
  if (!overlay || !detailsContent) return;
  
  // Format Date
  let dateStr = 'N/A';
  if (submission.created_at) {
    const d = new Date(submission.created_at);
    dateStr = d.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
  }
  
  let dynamicDetailsHTML = '';
  
  if (submission.type === 'guest') {
    dynamicDetailsHTML = `
      <div class="detail-section-title">Personal & Contact Info</div>
      <div class="detail-grid">
        <div class="detail-field">
          <span class="detail-label">Full Name</span>
          <span class="detail-value">${submission.name || 'N/A'}</span>
        </div>
        <div class="detail-field">
          <span class="detail-label">Email Address</span>
          <span class="detail-value">${submission.email || 'N/A'}</span>
        </div>
        <div class="detail-field">
          <span class="detail-label">Phone Number</span>
          <span class="detail-value">${submission.phone || 'N/A'}</span>
        </div>
        <div class="detail-field">
          <span class="detail-label">Profession / Title</span>
          <span class="detail-value">${submission.profession || 'N/A'}</span>
        </div>
        ${submission.company ? `
        <div class="detail-field">
          <span class="detail-label">Company / Organization</span>
          <span class="detail-value">${submission.company}</span>
        </div>` : ''}
        <div class="detail-field">
          <span class="detail-label">Target Show Choice</span>
          <span class="detail-value">${submission.show_choice || 'N/A'}</span>
        </div>
      </div>
      
      <div class="detail-section-title">Topics & Interview Scope</div>
      <div class="detail-grid">
        <div class="detail-field full-width">
          <span class="detail-label">Selected Topics</span>
          <span class="detail-value">${submission.topics || 'None selected'}</span>
        </div>
        <div class="detail-field full-width">
          <span class="detail-label">Biography & Context</span>
          <span class="detail-value">${submission.bio_story || 'N/A'}</span>
        </div>
      </div>
      
      <div class="detail-section-title">Unique Story Details</div>
      <div class="detail-grid">
        <div class="detail-field full-width">
          <span class="detail-label">Pitch details & Audience benefits</span>
          <span class="detail-value">${submission.message || 'N/A'}</span>
        </div>
        ${submission.media_links ? `
        <div class="detail-field full-width">
          <span class="detail-label">Media & Social Links</span>
          <span class="detail-value">${submission.media_links}</span>
        </div>` : ''}
      </div>
      
      <div class="detail-section-title">Declaration & Signature</div>
      <div class="detail-grid">
        <div class="detail-field">
          <span class="detail-label">Date Submitted</span>
          <span class="detail-value">${dateStr}</span>
        </div>
        <div class="detail-field">
          <span class="detail-label">Digital Signature</span>
          <span class="detail-value signature-font">${submission.signature || 'N/A'}</span>
        </div>
      </div>
    `;
  } else {
    // Sponsor details
    dynamicDetailsHTML = `
      <div class="detail-section-title">Sponsor Organization & Contact</div>
      <div class="detail-grid">
        <div class="detail-field">
          <span class="detail-label">Contact Name</span>
          <span class="detail-value">${submission.name || 'N/A'}</span>
        </div>
        <div class="detail-field">
          <span class="detail-label">Company Name</span>
          <span class="detail-value">${submission.company || 'N/A'}</span>
        </div>
        <div class="detail-field">
          <span class="detail-label">Email Address</span>
          <span class="detail-value">${submission.email || 'N/A'}</span>
        </div>
        <div class="detail-field">
          <span class="detail-label">Phone Number</span>
          <span class="detail-value">${submission.phone || 'N/A'}</span>
        </div>
        <div class="detail-field">
          <span class="detail-label">Sponsorship Tier</span>
          <span class="detail-value">${submission.profession || 'N/A'}</span>
        </div>
        <div class="detail-field">
          <span class="detail-label">Target Show Choice</span>
          <span class="detail-value">${submission.show_choice || 'N/A'}</span>
        </div>
      </div>
      
      <div class="detail-section-title">Inquiry message & Budget details</div>
      <div class="detail-grid">
        <div class="detail-field full-width">
          <span class="detail-label">Message Details</span>
          <span class="detail-value">${submission.message || 'N/A'}</span>
        </div>
      </div>
      
      <div class="detail-section-title">Declaration & Signature</div>
      <div class="detail-grid">
        <div class="detail-field">
          <span class="detail-label">Date Submitted</span>
          <span class="detail-value">${dateStr}</span>
        </div>
        <div class="detail-field">
          <span class="detail-label">Digital Signature</span>
          <span class="detail-value signature-font">${submission.signature || 'N/A'}</span>
        </div>
      </div>
    `;
  }
  
  detailsContent.innerHTML = dynamicDetailsHTML;
  overlay.classList.add('active');
}

function closeSubmissionDetail() {
  const overlay = document.getElementById('submission-modal-overlay');
  if (overlay) overlay.classList.remove('active');
  selectedSubmission = null;
}

async function updateSubmissionStatus(id, newStatus) {
  if (!supabaseClient) return;
  try {
    const { error } = await supabaseClient
      .from('rania_submissions')
      .update({ status: newStatus })
      .eq('id', id);
      
    if (error) throw error;
    
    // Update local state
    const sub = allSubmissions.find(s => s.id === id);
    if (sub) sub.status = newStatus;
    
    showToast(`Submission status updated to ${newStatus}.`);
    closeSubmissionDetail();
    renderSubmissions();
    await updateSubmissionsBadgeCount();
  } catch (err) {
    console.error('Error updating status:', err);
    showToast('Failed to update submission status.', 'error');
  }
}

async function deleteSubmission(id) {
  if (!supabaseClient) return;
  try {
    const { error } = await supabaseClient
      .from('rania_submissions')
      .delete()
      .eq('id', id);
      
    if (error) throw error;
    
    // Update local state
    allSubmissions = allSubmissions.filter(s => s.id !== id);
    
    showToast('Submission deleted successfully.');
    closeSubmissionDetail();
    renderSubmissions();
    await updateSubmissionsBadgeCount();
  } catch (err) {
    console.error('Error deleting submission:', err);
    showToast('Failed to delete submission.', 'error');
  }
}

// --- Event Listeners Setup ---

document.addEventListener('DOMContentLoaded', () => {
  if (!supabaseClient) {
    console.error('Supabase SDK not loaded.');
    showToast('Supabase SDK could not be loaded. Check internet or credentials.', 'error');
    return;
  }
  
  // Media Type buttons
  typeYoutubeBtn.addEventListener('click', () => selectMediaType('youtube'));
  typeAudioBtn.addEventListener('click', () => selectMediaType('audio'));
  
  // Inputs listeners for live preview updates
  spotlightTitleEn.addEventListener('input', updateLivePreview);
  spotlightDescEn.addEventListener('input', updateLivePreview);
  spotlightYoutubeUrl.addEventListener('input', updateLivePreview);
  
  // File upload input change
  spotlightAudioFile.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelection(e.target.files[0]);
    }
  });
  
  // Remove file button
  removeFileBtn.addEventListener('click', resetFileSelection);
  
  // Drag & Drop event bindings
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    }, false);
  });
  
  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
    }, false);
  });
  
  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files && files[0]) {
      handleFileSelection(files[0]);
    }
  }, false);
  
  // Form submissions
  spotlightForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await saveSpotlightConfig();
  });
  
  tickerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await addTickerEpisode();
  });
  
  // --- Collapsible Sidebar Logic ---
  const toggleSidebarBtn = document.getElementById('toggle-sidebar-btn');
  const appSidebar = document.getElementById('app-sidebar');
  if (toggleSidebarBtn && appSidebar) {
    toggleSidebarBtn.addEventListener('click', () => {
      appSidebar.classList.toggle('collapsed');
    });
  }
  
  // --- Tab Swapping & Teaser Logic ---
  const navOptionButtons = document.querySelectorAll('.nav-option-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const activeBreadcrumbTab = document.getElementById('active-breadcrumb-tab');
  
  const TEASER_CONTENT = {
    sales: {
      title: "Sales Tracking & Invoicing",
      desc: "This is a Preview Feature: Unlock automated guest invoice generation, sponsorship contract tracking, and digital merchandise sales metrics directly inside your dashboard."
    },
    products: {
      title: "Products & Merchandise",
      desc: "This is a Preview Feature: Catalog and manage your physical merchandise, ticket categories, sponsor packages, and digital download assets in one central inventory."
    },
    tags: {
      title: "Tags & Categories",
      desc: "This is a Preview Feature: Organise your show episodes, guest taxonomy, search categories, and social media channels to dynamically filter content on your website."
    },
    analytics: {
      title: "Advanced Show Analytics",
      desc: "This is a Preview Feature: Gain deep-dive insights on unique audience page views, user engagement duration, geographical locations of listeners, and source link tracking."
    },
    members: {
      title: "VIP Members & Guests",
      desc: "This is a Preview Feature: Access your VIP listener database, guest list RSVP records, attendee profile directories, and customized newsletter subscriptions."
    },
    settings: {
      title: "System Control Settings",
      desc: "This is a Preview Feature: Customize global SEO meta keywords, connect payment integrations (Stripe, Paypal), adjust site localization languages, and configure domain routing options."
    },
    help: {
      title: "Premium Developer Support",
      desc: "This is a Preview Feature: Get 24/7 direct access to dedicated developers at The Clips Agency, schedule training sessions, and submit support tickets."
    }
  };
  
  navOptionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-tab');
      if (!tabName) return;
      
      // Update active button
      navOptionButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update active tab panels
      tabPanels.forEach(p => p.classList.remove('active'));
      
      let friendlyName = 'Dashboard';
      
      if (tabName === 'dashboard') {
        const dashboardPanel = document.getElementById('tab-dashboard');
        if (dashboardPanel) dashboardPanel.classList.add('active');
        friendlyName = 'Dashboard';
      } else if (tabName === 'cms') {
        const cmsPanel = document.getElementById('tab-cms');
        if (cmsPanel) cmsPanel.classList.add('active');
        friendlyName = 'Spotlight & Ticker CMS';
      } else if (tabName === 'members') {
        const membersPanel = document.getElementById('tab-members');
        if (membersPanel) membersPanel.classList.add('active');
        friendlyName = 'Guest & Sponsor Submissions';
        loadSubmissionsList();
      } else {
        const teaserPanel = document.getElementById('tab-teaser');
        if (teaserPanel) teaserPanel.classList.add('active');
        
        const content = TEASER_CONTENT[tabName];
        if (content) {
          const tTitle = document.getElementById('teaser-title');
          const tDesc = document.getElementById('teaser-desc');
          if (tTitle) tTitle.textContent = content.title;
          if (tDesc) tDesc.textContent = content.desc;
          friendlyName = content.title;
        }
      }
      
      if (activeBreadcrumbTab) {
        activeBreadcrumbTab.textContent = friendlyName;
      }
    });
  });
  
  // --- Notifications Interactivity ---
  const notificationBell = document.querySelector('button[title="Notifications"]');
  if (notificationBell) {
    notificationBell.addEventListener('click', () => {
      showToast("Welcome to your Admin Control Panel! Everything is connected and live.");
      const dot = notificationBell.querySelector('.badge-dot');
      if (dot) dot.remove();
    });
  }
  
  // --- Submissions Inbox Event Bindings ---
  
  const searchInput = document.getElementById('submissions-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchQuery = e.target.value;
      renderSubmissions();
    });
  }
  
  // Filter Type Buttons
  const typeFilterBtns = document.querySelectorAll('[data-filter-type]');
  typeFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTypeFilter = btn.getAttribute('data-filter-type');
      renderSubmissions();
    });
  });
  
  // Filter Status Buttons
  const statusFilterBtns = document.querySelectorAll('[data-filter-status]');
  statusFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      statusFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeStatusFilter = btn.getAttribute('data-filter-status');
      renderSubmissions();
    });
  });
  
  // Modal close buttons
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalOverlay = document.getElementById('submission-modal-overlay');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeSubmissionDetail);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeSubmissionDetail();
    });
  }
  
  // Modal actions
  const btnApprove = document.getElementById('modal-btn-approve');
  const btnReject = document.getElementById('modal-btn-reject');
  const btnPending = document.getElementById('modal-btn-pending');
  const btnDelete = document.getElementById('modal-btn-delete');
  
  if (btnApprove) {
    btnApprove.addEventListener('click', () => {
      if (selectedSubmission) updateSubmissionStatus(selectedSubmission.id, 'Approved');
    });
  }
  if (btnReject) {
    btnReject.addEventListener('click', () => {
      if (selectedSubmission) updateSubmissionStatus(selectedSubmission.id, 'Rejected');
    });
  }
  if (btnPending) {
    btnPending.addEventListener('click', () => {
      if (selectedSubmission) updateSubmissionStatus(selectedSubmission.id, 'Pending');
    });
  }
  if (btnDelete) {
    btnDelete.addEventListener('click', () => {
      if (selectedSubmission && confirm('Are you sure you want to permanently delete this submission?')) {
        deleteSubmission(selectedSubmission.id);
      }
    });
  }
  
  // Initial database load calls
  loadSpotlightData();
  loadTickerList();
  updateSubmissionsBadgeCount();
});
