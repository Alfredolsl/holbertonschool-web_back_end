#!/usr/bin/env python3
"""Type-annotated function floor"""


def floor(n: float) -> int:
    """Takes float n and returns the floor of the float."""
    return int(n) if n >= 0 else int(n) - 1
