#!/usr/bin/env python3
"""Function that takes an integer 'max_delay' and returns
asyncio.Task"""
import asyncio

wait_random = __import__("0-basic_async_syntax").wait_random


def task_wait_random(max_delay: int = 10) -> asyncio.Task:
    """Returns asyncio.Task object"""
    return asyncio.create_task(wait_random(max_delay))
