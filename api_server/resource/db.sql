
drop table  if exists `user`;

CREATE TABLE `user` (
   `user_id` int(11) NOT NULL AUTO_INCREMENT,
   `user_name` varchar(45) NOT NULL,
   `user_pass_word` varchar(45) NOT NULL,
   `user_status` int(11) NOT NULL DEFAULT '0',
   PRIMARY KEY (`user_id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COMMENT='用户表'