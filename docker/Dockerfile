FROM cypress/included:6.8.0

RUN mkdir /cypress-docker
WORKDIR /cypress-docker


ARG BROWSER 
ENV BROWSER ${BROWSER}

COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
COPY ./docker/docker_entry.sh /usr/local/bin/
RUN npm install

ENTRYPOINT [ "bash", "docker_entry.sh" ]