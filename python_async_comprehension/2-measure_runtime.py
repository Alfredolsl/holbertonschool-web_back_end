#!/usr/bin/env python3
"""Import async_comprehension from the previous file and write a
measure_runtime coroutine that will execute async_comprehension four times in
parallel using asyncio.gather."""
from asyncio import gather
from time import time

async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """Measure runtime of async_comprehension
    ran 4 times asynchronously."""
    pre_time = time()
    await gather(async_comprehension(), async_comprehension(),
                 async_comprehension(), async_comprehension())
    post_time = time()
    return post_time - pre_time
