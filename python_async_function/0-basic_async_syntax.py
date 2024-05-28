#!/usr/bin/env python3
"""asynchronous coroutine that takes in an integer argument (max_delay, with a
default value of 10) named wait_random that waits for a random delay between 0
and max_delay (included and float value) seconds and
eventually returns it."""
from asyncio import sleep
from random import random


async def wait_random(max_delay: int = 10) -> float:
    """Pauses based on delay's value, then returns said value."""
    delay = max_delay * random()
    await sleep(delay)
    return delay
