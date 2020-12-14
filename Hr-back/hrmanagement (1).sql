-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2020 at 07:21 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hrmanagement`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidate`
--

CREATE TABLE `candidate` (
  `cId` int(11) NOT NULL,
  `fName` varchar(255) NOT NULL,
  `lName` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `qualification` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `candidate`
--

INSERT INTO `candidate` (`cId`, `fName`, `lName`, `age`, `phone`, `qualification`, `position`, `email`, `status`, `date`, `time`) VALUES
(29, 'Vanaja', 'Selvanajagam', '23', '771739377', 'A/L', 'ASE', 'vanaja@gmail.com', 'Canceled', '2020-12-15', 4),
(30, 'Nalini', 'Nanthan', '29', '768796782', 'A/L', 'QA', 'nalini@gmail.com', 'Scheduled', '2020-12-13', 3),
(31, 'Santhan', 'Selva', '26', '766305705', 'BSC', 'BA', 'santhan@gmail.com', 'Scheduled', '2020-12-15', 13),
(33, 'Kiru', 'Santhi', '24', '771739377', 'BSC', 'QA', 'majuyouth@gmail.com', 'Scheduled', '2020-12-16', 1),
(35, 'adnan1hhh', 'Santhi', '34', '771739377', 'BSC', 'se', 'majuyouth@gmail.com', 'Scheduled', '2020-12-31', 1),
(36, 'adnan1hhh', 'Santhi', '12', '771739377', 'se', 'QA', 'kirisanthi@gmail.com', 'Scheduled', '2020-12-24', 1),
(39, 'Kiru', 'Santhi', '34', '771739377', 'se', 'QA', 'majuyouth@gmail.com', 'Canceled', '2020-12-01', 2),
(40, 'adnan1hhh', 'Santhi', '3', '771739377', 'se', 'BA', 'majuyouth@gmail.com', 'Completed', '2020-11-30', 1),
(41, 'adnan1hhh', 'Santhi', '56', '771739377', 'BSC', 'ASE', 'dineshatputharasa@gmail.com', 'Scheduled', '2020-12-26', 1),
(42, 'jeeva', 'jeevaaa', '45', '771739377', 'BSC', 'ASE', 'kirisanthi@gmail.com', 'Scheduled', '2020-10-01', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`cId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidate`
--
ALTER TABLE `candidate`
  MODIFY `cId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
