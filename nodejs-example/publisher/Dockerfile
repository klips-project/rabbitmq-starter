FROM node:16-alpine
LABEL maintainer="jakob@meggsimum.de"

COPY /package.json /opt/package.json

WORKDIR /opt
RUN npm install --only=production

COPY /index.js /opt/index.js

COPY /wait-for.sh /opt/wait-for.sh
RUN chmod +x /opt/wait-for.sh

CMD ["node", "index.js"]
