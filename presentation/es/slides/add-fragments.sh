#!/bin/bash
# Script to add class="fragment" to slides 05-15

# Slide 05 - Founders
sed -i '' 's|<div style="text-align: center; margin-bottom: 20px;">|<div class="fragment" style="text-align: center; margin-bottom: 20px;">|' "slide-05.html"
sed -i '' 's|<!-- Founder 1: Dr. Abhishek -->.*<div style="background: linear-gradient(135deg, rgba(255,255,255,0.1)|<!-- Founder 1: Dr. Abhishek -->\n                <div class="fragment" style="background: linear-gradient(135deg, rgba(255,255,255,0.1)|' "slide-05.html"
sed -i '' 's|<!-- Founder 2: Ankit Bhasin -->.*<div style="background: linear-gradient(135deg, rgba(255,255,255,0.1)|<!-- Founder 2: Ankit Bhasin -->\n                <div class="fragment" style="background: linear-gradient(135deg, rgba(255,255,255,0.1)|' "slide-05.html"
sed -i '' 's|<!-- Founder 3: Sidharth Shukla -->.*<div style="background: linear-gradient(135deg, rgba(255,255,255,0.1)|<!-- Founder 3: Sidharth Shukla -->\n                <div class="fragment" style="background: linear-gradient(135deg, rgba(255,255,255,0.1)|' "slide-05.html"
sed -i '' 's|<!-- Founder 4: Mohit Shukla -->.*<div style="background: linear-gradient(135deg, rgba(255,255,255,0.1)|<!-- Founder 4: Mohit Shukla -->\n                <div class="fragment" style="background: linear-gradient(135deg, rgba(255,255,255,0.1)|' "slide-05.html"
sed -i '' 's|<!-- Bottom tagline -->.*<div style="text-align: center; margin-top: 18px;">|<!-- Bottom tagline -->\n            <div class="fragment" style="text-align: center; margin-top: 18px;">|' "slide-05.html"

echo "Fragments added successfully!"
