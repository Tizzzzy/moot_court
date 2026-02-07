from pydantic_settings import BaseSettings
from pathlib import Path


class Settings(BaseSettings):
    OPENAI_API_KEY: str
    HUGGINGFACE_TOKEN: str
    DATABASE_URL: str = "sqlite:///./moot_court.db"
    BASE_DATA_DIR: Path = Path("/gpfs/projects/p32143/moot_court/data")
    MAX_UPLOAD_SIZE_MB: int = 50

    class Config:
        env_file = ".env"
        case_sensitive = True
        extra = "allow"


settings = Settings()
