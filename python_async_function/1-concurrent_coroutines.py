#!/usr/bin/env python3
"""Spawn wait_random n times with the specified max_delay"""
import asyncio
from typing import List
import random

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """returns the list of all the delays (float values)."""
    spawn_list = []
    delayed_list = []
    for task in range(n):
        delayed_task = asyncio.create_task(wait_random(max_delay))
        delayed_task.add_done_callback(lambda x: 
                                       delayed_list.append(x.result()))
        spawn_list.append(delayed_task)

    for spawn in spawn_list:
        await spawn

    return delayed_list
