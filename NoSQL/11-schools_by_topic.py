#!/usr/bin/env python3
"""returns the list of school having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """
    mongo_collection will be the pymongo collection object
    topic (string) will be topic searched
    """
    documents = mongo_collection.find({"topic": topic})
    list_documents = [doc for doc in documents]
    return list_documents
