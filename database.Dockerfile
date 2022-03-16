FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=1234
ENV MYSQL_DATABASE=slack

CMD ["--default-authentication-plugin=mysql_native_password", "--character-set-server=utf8mb4", "--collation-server=utf8mb4_general_ci", "--skip-character-set-client-handshake"]

EXPOSE 3306