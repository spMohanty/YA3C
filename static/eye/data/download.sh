#!/bin/bash

for k in `cat list`
do
wget  $k
done
