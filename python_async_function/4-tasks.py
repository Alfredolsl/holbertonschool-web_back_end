#!/usr/bin/env python3
"""Taking the code from wait_n and alter it to a new function task_wait_n.
The difference is that task_wait_random is being called"""
from typing import List
import asyncio
import random

wait_random = __import__("0-basic_async_syntax").wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """Execute task_wait_random and returns a sorted list of delays"""
    spawn_list = []
    delay_list = []

    for task in range(n):
        delayed_task = asyncio.create_task(wait_random(max_delay))
        delayed_task.add_done_callback(lambda x: delay_list.append(x.result()))
        spawn_list.append(delayed_task)

    for spawn in spawn_list:
        await spawn

    return delay_list
