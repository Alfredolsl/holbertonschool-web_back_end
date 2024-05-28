#!/usr/bin/env python3
"""Type-annotated function to_kv"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """returns a tuple, the first element is the string 'k',
    the second element is a float of the result of square
    of the int/float 'v'"""
    return tuple([k, v * v])
