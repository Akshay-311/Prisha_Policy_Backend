CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    read_time INTEGER NOT NULL,
    rating INTEGER,
    details VARCHAR(200) NOT NULL,
    pdf_name VARCHAR(100) NOT NULL,
    thumbnail_name VARCHAR(100) NOT NULL
)