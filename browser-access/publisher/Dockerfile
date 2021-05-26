FROM node:14-alpine3.12
LABEL maintainer="jakob@meggsimum.de"

COPY /package.json /opt/package.json

WORKDIR /opt
RUN npm install --only=production

COPY /index.js /opt/index.js

COPY /wait-for.sh /opt/wait-for.sh
RUN chmod +x /opt/wait-for.sh

CMD ["node", "index.js"]
