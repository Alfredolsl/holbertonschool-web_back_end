#!/usr/bin/env python3
"""A couroutine that loops 10 times, each time asynchronously waits 1 second,
then yield a random float number between 0-10."""
from asyncio import sleep
from random import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Generator that yields a random value between 0-10 every second
    10 times"""
    for i in range(10):
        await sleep(1)
        yield 10 * random()
