import tornado.ioloop
import tornado.web
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
HTML_DIR = os.path.join(BASE_DIR, "html")

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("roulette.html")

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ],
    template_path=HTML_DIR,  
    static_path=os.path.join(BASE_DIR, "static"),  

    )

if __name__ == "__main__":
    app = make_app()
    app.listen(8000)
    print("Server is running on http://localhost:8000")
    tornado.ioloop.IOLoop.current().start()