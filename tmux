rename-session instagram-chat
send "PORT=8000 ENV=development nodemon index.js" C-m
new-window
send "webpack --watch --config frontend/config/webpack.dev.js" C-m
new-window
send "vim ." C-m

