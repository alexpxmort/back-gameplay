# back-gameplay
Um projeto nodejs

######
Rode na branch master
npm install ou yarn install
no mysql rode estes comandos:

CREATE DATABASE gameplay;
use gameplay;
CREATE TABLE `game_play_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `jogadas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chute` int(11) NOT NULL,
  `tempo` LONGTEXT NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_gameplay_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_gameplay_id` (`user_gameplay_id`),
  CONSTRAINT `fk_user_gameplay_id` FOREIGN KEY (`user_gameplay_id`) REFERENCES `game_play_users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

E apos criar o Database com as tabelas verifique o usuário e a senha no arquivo dbsConf.js dentro src/config e mude para o seu usuário e senha

após isso inicie o servidor com comando yarn start ou npm start
