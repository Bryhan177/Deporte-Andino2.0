-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-09-2024 a las 23:23:33
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_deporte_andino`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `rol` enum('administrador','usuario') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `contrasena`, `rol`) VALUES
(1, 'Bryhan', 'bryhan@gmail.com', '$2y$10$8EEhd5kX3dFsCcBk4z7HoOjU/LY5SifNvYL2M7x7f6JkUeijHpfqi', 'administrador'),
(2, 'Graciela', 'graciela@gmail.com', '$2y$10$j5V4bjicnfLFuCKZxdVwquwRRcCp9z3D.8v.LzoSLo45NwmzecbyS', 'administrador'),
(3, 'Isabella', 'isa@gmail.com', '$2y$10$F/AvwuF.eyoHKudn9758UuDU2SJiFzuGBm7l3Qgkk5Ttr14c.Jxvq', 'usuario'),
(4, 'Alejandra', 'Alejandra@gmail.com', '$2y$10$eNJYD5ebRXFcNfWldjcvP.TTH.QsLQ3jnSFQiH0bYZxtEdMRXH8ZG', 'administrador'),
(9, 'German', 'german@gmail.com', '$2y$10$WTeN0B4S66tfnvOoprePc.FvFBc9Ue9z6vYAUI0rRa8UvbGox4RRa', 'usuario'),
(10, 'freddy', 'freddy@gmail.com', '$2y$10$GAvUh/DeqrY2OBdoZ4uN2.mRH5S.YaMuSTG/FkVSJMl8bBTFF5lFK', 'administrador'),
(11, 'Thomas', 'thomy@gmail.com', '$2y$10$VJPTGQptRiiR3QrprhlFNO22LzNBZ9dfwXpOmfcejxnN5mr4RN13W', 'usuario'),
(12, 'Bryhann', 'bryhann@gmail.com', '$2y$10$1U5dC52pI2jQeDcUu1FfkuxO6BAqSndnivUb0YZijt5IN/63Y0Qmm', 'usuario'),
(13, 'allan', 'allan@gmail.com', '$2y$10$q5hleNyhtCdcFrs6skL4JOwk9b6w.4f.bN5b97kq4RhI6mTLzUhMm', 'usuario');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
