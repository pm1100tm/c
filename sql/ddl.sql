DROP TABLE IF EXISTS `sign_up_type`;
CREATE TABLE `sign_up_type` (
  `id` tinyint(4) NOT NULL,
  `name` varchar(8) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(30) NOT NULL,
  `password` varchar(60) DEFAULT NULL,
  `isActive` tinyint(4) NOT NULL DEFAULT '1',
  `signUpTypeId` tinyint(4) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `name` varchar(30) NOT NULL,
  `displayName` varchar(30) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `timezone` tinyint(3) unsigned NOT NULL,
  `thumbnailUrlLarge` blob,
  `thumbnailUrlMedium` blob,
  `thumbnailUrlSmall` blob,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`),
  UNIQUE KEY `IDX_065d4d8f3b5adb4a08841eae3c` (`name`),
  KEY `FK_6b147104dc5bfd3f4d5d494dc51` (`signUpTypeId`),
  CONSTRAINT `FK_6b147104dc5bfd3f4d5d494dc51` FOREIGN KEY (`signUpTypeId`) REFERENCES `sign_up_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
