#!/usr/bin/env python3
"""Function that measures time with integers 'n'
and 'max_delay' as arguments that measures the total execution time for
wait_n(n, max_delay).
Returns total_time/n as a float."""
from asyncio import run
from time import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Returns exec time for wait_n given 'n' and 'max_delay'"""
    pre_run = time()
    run(wait_n(n, max_delay))
    post_run = time()
    elapsed_time = post_run - pre_run
    return elapsed_time / n
