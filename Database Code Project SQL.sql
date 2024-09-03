CREATE DATABASE Project;
use Project;

CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(100) NOT NULL,
    StudentEmail VARCHAR(100) UNIQUE NOT NULL,
    StudentPassword VARCHAR(255) NOT NULL,
    DateOfBirth DATE
);

CREATE TABLE AcademicRecords (
    RecordID INT PRIMARY KEY,
    StudentID INT,
    Course VARCHAR(100),
    Grade CHAR(2),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID) ON DELETE CASCADE
);

CREATE TABLE Preferences (
    PreferenceID INT PRIMARY KEY AUTO_INCREMENT,
    StudentID INT,
    PreferredSubjects TEXT,
    LearningStyles TEXT,
    CareerInterests TEXT,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID) ON DELETE CASCADE
);

CREATE TABLE ProgressTracking (
    ProgressID INT PRIMARY KEY AUTO_INCREMENT,
    StudentID INT,
    CompletedAssignments TEXT,
    Assessments TEXT,
    LearningMilestones TEXT,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID) ON DELETE CASCADE
);

CREATE TABLE Advisors (
    AdvisorID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    AdvisorPassword VARCHAR(255) NOT NULL,
    Specialization VARCHAR(100),
    Experience INT CHECK (Experience >= 0)
);

CREATE TABLE AssignedStudents (
    AdvisorID INT,
    StudentID INT,
    PRIMARY KEY (AdvisorID, StudentID),
    FOREIGN KEY (AdvisorID) REFERENCES Advisors(AdvisorID) ON DELETE CASCADE,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID) ON DELETE CASCADE
);

CREATE TABLE Parents (
    ParentID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    PASSWORD VARCHAR(255) NOT NULL
);

CREATE TABLE LinkedStudents (
    ParentID INT,
    StudentID INT,
    PRIMARY KEY (ParentID, StudentID),
    FOREIGN KEY (ParentID) REFERENCES Parents(ParentID) ON DELETE CASCADE,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID) ON DELETE CASCADE
);

CREATE TABLE CommunicationHistory (
    CommID INT PRIMARY KEY,
    ParentID INT,
    AdvisorID INT,
    CommunicationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Message TEXT,
    FOREIGN KEY (ParentID) REFERENCES Parents(ParentID) ON DELETE CASCADE,
    FOREIGN KEY (AdvisorID) REFERENCES Advisors(AdvisorID) ON DELETE CASCADE
);
