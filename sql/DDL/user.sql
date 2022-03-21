CREATE TABLE `user`
(
    `id`                   int(11)             NOT NULL AUTO_INCREMENT,
    `email`                varchar(30)         NOT NULL,
    `social_unique_id`     varchar(191)        NOT NULL,
    `name`                 varchar(30)         NOT NULL,
    `display_name`         varchar(30)                  DEFAULT NULL,
    `phone`                varchar(20)                  DEFAULT NULL,
    `timezone`             tinyint(3) unsigned NOT NULL,
    `thumbnail_url_large`  varchar(191)                 DEFAULT NULL,
    `thumbnail_url_medium` varchar(191)                 DEFAULT NULL,
    `thumbnail_url_small`  varchar(191)                 DEFAULT NULL,
    `is_active`            tinyint(4)          NOT NULL DEFAULT '1',
    `created_at`           datetime(6)         NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at`           datetime(6)         NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
    `sign_up_type_id`      tinyint(4)          NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_email` (`email`),
    UNIQUE KEY `uk_social_unique_id` (`social_unique_id`),
    KEY `idx_sign_up_type_id` (`sign_up_type_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4;