#!/usr/bin/env python3
"""Spawn wait_random n times with the specified max_delay"""
import asyncio
from typing import List
import random

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """returns a list of all the delays"""

