Для запуска бжкенда исользуется докер.
Необходимо ввести следующие команды: 
docker build . -t projectname
docker run --add-host host.docker.internal:host-gateway -p 5000:5000 projectname
