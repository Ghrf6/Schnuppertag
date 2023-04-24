-- docker exec -it mariaDB bash
-- mysql -uroot -p1234   

DROP DATABASE IF EXISTS kunden;

CREATE DATABASE IF NOT EXISTS kunden;

USE kunden;

CREATE TABLE IF NOT EXISTS Versicherungen (
Versicherung_ID INTEGER NOT NULL,
Name VARCHAR(255),
Dauer INTEGER,
Beschreibung VARCHAR(255),
PRIMARY KEY (Versicherung_ID)
);

CREATE TABLE IF NOT EXISTS Firmen (
Firma_ID INTEGER NOT NULL,
Name VARCHAR(255),
Gruendungsjahr INTEGER,
Beschreibung VARCHAR(255),
Anzahl_Mitarbeiter INTEGER,
PRIMARY KEY (Firma_ID)
);

CREATE TABLE IF NOT EXISTS Kunden (
Kunde_ID INTEGER NOT NULL,
Geburtsdatum DATE,
Name VARCHAR(255),
Vorname VARCHAR(255),
Versicherung_ID INTEGER,
Firma_ID INTEGER,
PRIMARY KEY (Kunde_ID),
FOREIGN KEY (Versicherung_ID) REFERENCES Versicherungen(Versicherung_ID) ON DELETE NO ACTION,
FOREIGN KEY (Firma_ID) REFERENCES Firmen(Firma_ID) ON DELETE NO ACTION
);