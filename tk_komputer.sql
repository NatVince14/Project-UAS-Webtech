-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Des 2022 pada 14.09
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tk_komputer`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `aksesoris`
--

CREATE TABLE `aksesoris` (
  `id_aksesoris` int(11) NOT NULL,
  `nama_aksesoris` varchar(256) NOT NULL,
  `jumlah_aksesoris` int(128) NOT NULL,
  `harga_aksesoris` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `aksesoris`
--

INSERT INTO `aksesoris` (`id_aksesoris`, `nama_aksesoris`, `jumlah_aksesoris`, `harga_aksesoris`) VALUES
(1, 'Casing Harddisk', 10, 4500),
(2, 'Cooling Pad', 3, 5000),
(3, 'Harddisk 1TB', 30, 10000),
(4, 'Flask Drive 64 GB', 2, 8000),
(5, 'Casing CPU', 3, 10000),
(6, 'Thermal Paste', 2, 5000),
(7, 'Charger Laptop ACER', 5, 25000),
(8, 'Headphone', 7, 8900),
(9, 'Kabel USB 2.0', 10, 1000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(200) DEFAULT NULL,
  `product_qty` int(50) NOT NULL,
  `product_price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_qty`, `product_price`) VALUES
(1, 'Notebook Samsung', 4, 10000),
(2, 'Komputer ACER', 5, 20000),
(3, 'Komputer ASUS', 6, 100000),
(4, 'Laptop ACER', 9, 500000),
(5, 'Laptop HP\r\n', 7, 96000),
(6, 'Notebook Lenovo', 3, 90000),
(7, 'Komputer Huawei', 5, 45000),
(8, 'Notebook ASUS', 3, 10000);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `aksesoris`
--
ALTER TABLE `aksesoris`
  ADD PRIMARY KEY (`id_aksesoris`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `aksesoris`
--
ALTER TABLE `aksesoris`
  MODIFY `id_aksesoris` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7773;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
