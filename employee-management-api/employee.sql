/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 8.0.30 : Database - employee
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`employee` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `employee`;

/*Table structure for table `employee_entity` */

DROP TABLE IF EXISTS `employee_entity`;

CREATE TABLE `employee_entity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(10) NOT NULL,
  `last_name` varchar(10) NOT NULL,
  `email` varchar(150) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `photo` varchar(150) DEFAULT 'https://randomuser.me/api/portraits/men/92.jpg',
  `number` varchar(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_a6fac314449165b52f413e56a0` (`email`),
  UNIQUE KEY `IDX_fe23aa02f41afd1a1145b42cb8` (`number`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `employee_entity` */

insert  into `employee_entity`(`id`,`first_name`,`last_name`,`email`,`gender`,`photo`,`number`) values 
(1,'Henri','Rodriguez','Darrin_Rippin@gmail.com','M','https://randomuser.me/api/portraits/men/92.jpg','94771277218'),
(2,'Lindsay','Herman','Ewald.Kunde@gmail.com','F','https://randomuser.me/api/portraits/men/30.jpg','94771274218'),
(3,'Gerda','Trantow','Mauricio.Stehr@yahoo.com','M','https://randomuser.me/api/portraits/men/85.jpg','94771277681'),
(4,'Skye','Rolfson','Angelita_Simonis@hotmail.com','F','https://randomuser.me/api/portraits/men/75.jpg','94771277689'),
(5,'Simeon','Russel','Fabiola_Heidenreich@yahoo.com','M','https://randomuser.me/api/portraits/men/81.jpg','94771277682'),
(6,'Kenyon','Fahey','Lia_Purdy@hotmail.com','F','https://randomuser.me/api/portraits/men/31.jpg','94771277683'),
(7,'Toni','Boyle','Vivien92@yahoo.com','M','https://randomuser.me/api/portraits/men/88.jpg','94771277684'),
(8,'Fredy','Fritsch','Christopher_Wisozk37@yahoo.com','M','https://randomuser.me/api/portraits/men/61.jpg','94771277685'),
(9,'Elvis','Konopelski','Mavis27@gmail.com','M','https://randomuser.me/api/portraits/men/66.jpg','94771277686'),
(10,'Lulu','Reinger','Melany_Rau70@gmail.com','F','https://randomuser.me/api/portraits/men/32.jpg','94771277687'),
(11,'Kelton','Rau','Patrick_Ratke@gmail.com','F','https://randomuser.me/api/portraits/men/71.jpg','94771277688'),
(12,'Adonis','Schuppe','Johann.Orn52@hotmail.com','M','https://randomuser.me/api/portraits/men/36.jpg','94771277618');

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `migrations` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
