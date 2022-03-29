-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2022 at 06:31 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipes`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `title` varchar(17) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`title`, `description`, `image`) VALUES
('Gambas al Ajillo', 'Quick and garlicky!\r\nSeaafood \r\nSpanish', 'http://forkgasm.com/images/gambas.png'),
('Giouvarlakia', 'A low carb version of a traditional hearty Greek dish', 'https://forkgasm.com/images/106039513_690984628417462_2727964218559966794_n.jpg'),
('Papoutsakia', 'A traditional Greek dish that tastes very similar to moussaka, but is much quicker to cook.', 'http://forkgasm.com/images/6410429C-D04A-4624-9026-715C0A64A005.jpeg'),
('Shakshuka', 'Breakfast of champions (one of them)\r\nArabic Breakfast', 'http://forkgasm.com/images/shakshuka.jpg'),
('Spanakorizo', 'A low carb twist on the Greek classic, using cauliflower rice', 'http://forkgasm.com/images/spanakorizo.png'),
('Spiced lamb chops', 'Delicious, refreshing, and super quick to make!', 'http://forkgasm.com/images/40813912_2213541505597183_7740637805202109577_n.jpg'),
('Tal’s Tahini “bre', 'A delicious baked dessert that takes 5 minutes to make!', 'http://forkgasm.com/images/bread-pudding.png'),
('Turnip Noodle Car', 'A healthier version of the classic dish that tastes just as good!\",\"tag\"', 'http://forkgasm.com/images/carbonara.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`title`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
