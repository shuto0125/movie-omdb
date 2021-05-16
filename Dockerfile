FROM node:14-alpine
WORKDIR /app
RUN npm install -g ionic cordova
CMD ["bash"]
