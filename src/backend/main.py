import argparse
from wap.app import app

DEFAULT_HOST = "127.0.0.1"
DEFAULT_PORT = 8000


def main(host=DEFAULT_HOST, port=DEFAULT_PORT):
    app.run(auto_reload=True, access_log=True, host=host, port=port)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="wap main")
    parser.add_argument("-r", "--host", type=str, default=DEFAULT_HOST)
    parser.add_argument("-p", "--port", type=int, default=DEFAULT_PORT)
    args = parser.parse_args()
    main(args.host, args.port)
