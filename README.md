## xframe

Frames permissions suck, here's to hacking it all out.

### Process

This is basically how it'll work:

1. Send your cookies to a server. You have to trust this server, but a server can make all the requests that a browser can't.
    a. Drag the bookmarklet below to your bookmarks bar.
    b. Open up a page on the site that you want to pull from.
    c. Click the bookmarklet. This will send your current cookies, etc., to the server, *in the clear*.
    d. The server will send back a passcode.
2. Create a new page. For an example, see [github.html](github.html).
    a. You'll need to supply this page with your passcode. This is the cross-origin bit.
    b. Now you can make requests with a wrapped version of $.ajax, which will send all your requests to the proxying server, along with the passcode to recover your credentials.

This is all horribly insecure. Particularly because none of it's `https`, but also because you're sending credentials to a remote server.


## License

Copyright © 2013 Christopher Brown. [MIT Licensed](LICENSE).
