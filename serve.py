import http.server, os

class Handler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path):
            clean = self.path.split("?")[0].rstrip("/")
            if clean and "." not in os.path.basename(clean):
                candidate = self.translate_path(clean + ".html")
                if os.path.exists(candidate):
                    self.path = clean + ".html"
        return super().send_head()

if __name__ == "__main__":
    os.chdir("public")
    http.server.ThreadingHTTPServer(("0.0.0.0", 8080), Handler).serve_forever()
