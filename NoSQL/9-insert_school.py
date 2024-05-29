#!/usr/bin/env python3
"""function that inserts a new document in a collection based on kwargs"""


def insert_school(mongo_collection, **kwargs):
    """returns the new _id"""
    document_id = mongo_collection.insert(kwargs)
    return document_id