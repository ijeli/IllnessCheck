CREATE DATABASE diseases_db;
USE diseases_db;

CREATE TABLE symptoms
(
id int NOT NULL AUTO_INCREMENT,
symptom varchar(255) NOT NULL,
selected boolean,
disease_1 varchar(255),
disease_2 varchar(255),
disease_3 varchar(255),
disease_4 varchar(255),
disease_5 varchar(255),
PRIMARY KEY (id)
);


INSERT INTO symptoms (symptom, selected, disease_1, disease_2, disease_3, disease_4)
VALUES  ('Fever', FALSE, 'Influenza', 'Rheumatoid arthritis', 'Shingles', 'Open cough');
		( 'Headache', FALSE, 'Influenza', 'Shingles', 'Stroke', 'Malaria'),
        ('Vomiting', FALSE, 'Malaria', 'Norovirus', 'Anemia', 'Flu');
        
INSERT INTO symptoms (symptom, selected, disease_1, disease_2)
VALUES('Muscle Pain', FALSE, 'Influenza', 'Malaria'),
        ('Frequent Urination', FALSE, 'Gynecologic Cancers', 'Urinary track infection'),
        ('Sneezing', FALSE, 'Allergy', 'Open cough');
        ('Chills', FALSE, 'Flu', 'Urinary Tract Infection');
        
INSERT INTO symptoms (symptom, selected, disease_1, disease_2, disease_3)
VALUES('Diarrhea', FALSE, 'Flu', 'Norovirus', 'Anemia'),
	('Abdominal Pain', FALSE, 'Norovirus', 'Gynecologic Cancers', 'Anemia');
        
        
