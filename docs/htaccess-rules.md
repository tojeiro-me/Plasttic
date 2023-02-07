# HTACCESS rules

_rules that may affect your development workflow_

- ErrorDocument 404 /404.html
- Redirect from the `http://` to the `https://` version of the URL
- Rewrite www.example.com → example.com
- Block access to directories without a default document
- Block access to all hidden files and directories except for the visible content from within the `/.well-known/` hidden directory
- Revving filenames that don’t use a querystring
