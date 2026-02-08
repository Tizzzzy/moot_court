from pydantic_settings import BaseSettings
from pathlib import Path
from typing import Optional


class Settings(BaseSettings):
    OPENAI_API_KEY: str
    HUGGINGFACE_TOKEN: str
    DATABASE_URL: str = "sqlite:///./moot_court.db"
    BASE_DATA_DIR: Optional[str] = None  # Will default in path_utils if not set
    MAX_UPLOAD_SIZE_MB: int = 50

    class Config:
        env_file = ".env"
        case_sensitive = True
        extra = "allow"


settings = Settings()
