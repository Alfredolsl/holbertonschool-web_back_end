#!/usr/bin/env python3
"""Annotating the following function's parameters and return values
with the appropiate types"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples, one for each element, with two items:
        the element itself and its length."""
    return [(i, len(i)) for i in lst]
