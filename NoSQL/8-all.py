#!/usr/bin/env python3
"""function that lists all documents in a collection"""


def list_all(mongo_collection):
    """mongo_collection will be the pymongo collection object."""
    documents = mongo_collection.find()
    if documents.count() == 0:
        return []
    return documents
