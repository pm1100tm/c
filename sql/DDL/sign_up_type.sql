CREATE TABLE `sign_up_type`
(
    `id`         tinyint(4)  NOT NULL,
    `name`       varchar(8)  NOT NULL,
    `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;
