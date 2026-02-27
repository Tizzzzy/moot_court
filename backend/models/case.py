from sqlalchemy import Column, Integer, String, Text, Date, DECIMAL, DateTime, ForeignKey, Boolean, Enum as SQLEnum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from backend.database import Base
import enum


class JobStatus(str, enum.Enum):
    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"


class JobType(str, enum.Enum):
    OCR = "ocr"
    EVIDENCE_RECOMMEND = "evidence_recommend"
    EVIDENCE_VALIDATE = "evidence_validate"


class ProcessingJob(Base):
    __tablename__ = "processing_jobs"

    id = Column(Integer, primary_key=True)
    job_id = Column(String(36), unique=True, nullable=False, index=True)
    job_type = Column(SQLEnum(JobType), nullable=False)
    status = Column(SQLEnum(JobStatus), nullable=False, default=JobStatus.PENDING)
    case_id = Column(Integer, ForeignKey("cases.id"), nullable=True)
    input_file_path = Column(Text)
    output_data = Column(Text)  # JSON string
    error_message = Column(Text)
    created_at = Column(DateTime, server_default=func.now())
    completed_at = Column(DateTime)


class Case(Base):
    __tablename__ = "cases"

    id = Column(Integer, primary_key=True)
    user_id = Column(String(50), nullable=False, index=True)
    case_number = Column(String(100))
    case_type = Column(String(100), nullable=False)
    state = Column(String(50), nullable=False)
    county = Column(String(50))
    filing_date = Column(Date)
    claim_summary = Column(Text, nullable=False)
    amount_sought = Column(DECIMAL(10, 2))
    incident_date = Column(Date)
    demand_letter_sent = Column(Boolean, default=False)
    agreement_included = Column(Boolean, default=False)
    status = Column(String(20), default="draft")
    created_at = Column(DateTime, server_default=func.now())

    parties = relationship("Party", back_populates="case", cascade="all, delete-orphan")


class Party(Base):
    __tablename__ = "parties"

    id = Column(Integer, primary_key=True)
    case_id = Column(Integer, ForeignKey("cases.id"), nullable=False)
    role = Column(String(20), nullable=False)  # plaintiff, defendant
    name = Column(String(255), nullable=False)
    address = Column(Text)

    case = relationship("Case", back_populates="parties")


class CourtSessionModel(Base):
    __tablename__ = "court_sessions"

    id = Column(Integer, primary_key=True)
    session_id = Column(String(36), unique=True, nullable=False, index=True)
    user_id = Column(String(50), nullable=False, index=True)
    case_id = Column(Integer, ForeignKey("cases.id"), nullable=False)

    status = Column(String(20), default="active")  # active, completed
    current_speaker = Column(String(20))  # Judge, Defendant, Plaintiff, Clerk
    turn_number = Column(Integer, default=0)
    evidence_upload_allowed = Column(Boolean, default=False)

    state_snapshot = Column(Text)  # JSON serialized CourtSession state

    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())

    case = relationship("Case")
