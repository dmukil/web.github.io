-- MySQL Script generated by MySQL Workbench
-- Mo 01 Apr 2019 19:17:39 CEST
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema Team_Unicum
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Team_Unicum
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Team_Unicum` DEFAULT CHARACTER SET utf8 ;
USE `Team_Unicum` ;

-- -----------------------------------------------------
-- Table `Team_Unicum`.`persons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Team_Unicum`.`persons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `gender` CHAR NULL,
  `birthdate` DATE NULL,
  `username` VARCHAR(60) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `weather_sensibility` TINYINT NULL,
  `password` VARCHAR(60) NOT NULL,
  `job_title` VARCHAR(45) NULL,
  `created_on` DATETIME NULL,
  `updated_on` DATETIME NULL,
  `deleted_on` DATETIME NULL,
  `active` TINYINT(1) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB
COMMENT = 'Records of user details at the time of signing him/her up to the web service. Future operations like update or soft delete are also possible. No default values are specified yet.';


-- -----------------------------------------------------
-- Table `Team_Unicum`.`clothes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Team_Unicum`.`clothes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NULL,
  `layer_number` TINYINT NOT NULL,
  `gender` CHAR NULL,
  `category` ENUM('DEFAULT', 'CUSTOM') NULL DEFAULT 'DEFAULT',
  `id_user` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_clothes_users_idx` (`id_user` ASC),
  CONSTRAINT `fk_clothes_users`
    FOREIGN KEY (`id_user`)
    REFERENCES `Team_Unicum`.`persons` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Records of clothes for different genders (including age). Note that the word \'clothes\' has been treated as both singular and plural form to deal with naming convention. Therefore, a foreign key referencing the table \'clothes\' will be \'id_clothes\', unlike the others that are expressed in a singular form (i,e. id_user).';


-- -----------------------------------------------------
-- Table `Team_Unicum`.`logs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Team_Unicum`.`logs` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `created_on` DATETIME NOT NULL,
  `type` ENUM('API', 'UI', 'OTHER') NOT NULL DEFAULT 'API',
  `data` JSON NULL,
  `request_type` VARCHAR(60) NULL,
  `id_user` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Records of logs for the entire web service: user interactions, API requests, etc.';


-- -----------------------------------------------------
-- Table `Team_Unicum`.`clothes_settings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Team_Unicum`.`clothes_settings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `num_up_layer` TINYINT NOT NULL,
  `num_down_layer` TINYINT NOT NULL,
  `num_accessories` TINYINT NOT NULL,
  `type_socks` ENUM('LIGHT', 'MEDIUM', 'HEAVY') NULL,
  `type_shoes` ENUM('LIGHT', 'MEDIUM', 'HEAVY') NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Records of sets of clothes regarding the weather conditions';


-- -----------------------------------------------------
-- Table `Team_Unicum`.`weather_conditions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Team_Unicum`.`weather_conditions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `temp` DOUBLE NOT NULL,
  `temp_min` DOUBLE NOT NULL,
  `temp_max` DOUBLE NULL,
  `feels_like` DOUBLE NULL,
  `humidity` DOUBLE NOT NULL,
  `pressure` DOUBLE NULL,
  `wind_speed` DOUBLE NULL,
  `wind_degree` DOUBLE NULL,
  `weather_protection` DOUBLE NOT NULL,
  `id_clothes_setting` INT NOT NULL,
  PRIMARY KEY (`id`, `id_clothes_setting`),
  INDEX `fk_weather_conditions_clothes_settings1_idx` (`id_clothes_setting` ASC),
  CONSTRAINT `fk_weather_conditions_clothes_settings1`
    FOREIGN KEY (`id_clothes_setting`)
    REFERENCES `Team_Unicum`.`clothes_settings` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Records of predefined weather conditions to determine weather protection. Many parameters are taken into account to model the weight factor of the decision-making ( clothes suggestions).';


-- -----------------------------------------------------
-- Table `Team_Unicum`.`clothes_settings_refer_to_clothes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Team_Unicum`.`clothes_settings_refer_to_clothes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_clothes` INT NOT NULL,
  `id_clothes_setting` INT NOT NULL,
  PRIMARY KEY (`id`, `id_clothes`, `id_clothes_setting`),
  INDEX `fk_clothes_settings_has_clothes_clothes1_idx` (`id_clothes` ASC),
  INDEX `fk_clothes_settings_has_clothes_clothes_settings1_idx` (`id_clothes_setting` ASC),
  CONSTRAINT `fk_clothes_settings_has_clothes_clothes_settings1`
    FOREIGN KEY (`id_clothes_setting`)
    REFERENCES `Team_Unicum`.`clothes_settings` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clothes_settings_has_clothes_clothes1`
    FOREIGN KEY (`id_clothes`)
    REFERENCES `Team_Unicum`.`clothes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Team_Unicum`.`feedbacks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Team_Unicum`.`feedbacks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rating` ENUM('POSITIVE', 'NEGATIVE') NOT NULL,
  `review_text` VARCHAR(255) NULL,
  `reward_factor` VARCHAR(45) NULL,
  `suggestions` VARCHAR(255) NULL,
  `created_on` DATETIME NULL,
  `id_user` INT NOT NULL,
  PRIMARY KEY (`id`, `id_user`),
  INDEX `fk_feedbacks_users1_idx` (`id_user` ASC),
  CONSTRAINT `fk_feedbacks_users1`
    FOREIGN KEY (`id_user`)
    REFERENCES `Team_Unicum`.`persons` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Records a mechanism of reinforcement learning, provided by the users. The \'feedback\' doesn\'t have a plural in English. However, to upkeep the standardization between table names, the name \'feedbacks\' is used.';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
