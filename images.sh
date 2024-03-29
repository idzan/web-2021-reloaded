####
## @file
## Optimize jpg and png images. Convert jpg, png, and gif to webp where passible.
##
## This script requires the following utilities to be installed (non-standard):
##   * jpegoptim
##   * pngcrush
##   * optipng
##   * webp (metapackage including cwebp and gif2webp)
##
## Run this script from the repo root (ex: `.scripts/images.sh`).
####

##
# Optimize legacy formats.
#
# Note: These are disabled in the script because we have webp enabled and all the images already
# in the repo are optimized. Re-optimizing JPEGs especially is lossy, and PNGs is time-consuming, so if we operated on
# the assumption that most users can use our webp versions then optimizing the legacies is a more-rare step.
#
# @todo Make a flag for this in bash.
##
#for i in `find imgs/ -name "*.jpg"`; do jpegoptim --max=80 --strip-all --all-progressive --preserve --totals $i; done;
#for i in `find img/ -name "*.png"`; do pngcrush -e .png2 -rem allb -brute -reduce $i; mv ${i}2 $i; optipng -o7 $i; done

# Create webp copies that are just the original filenames with .webp appended (to make it easy for Jekyll to conditionally
# find them.
#for i in `find imgs/ -name "*.jpg"`; do cwebp -q 75 $i -o $i.webp; done;
#for i in `find img/ -name "*.png"`; do cwebp -q 85 $i -o $i.webp; done
#for i in `find img/ -name "*.gif"`; do gif2webp -q 75 $i -o $i.webp; done

# If cavif [https://github.com/kornelski/cavif-rs/releases] available, make AVIFs like webp above.
# @todo Switch this to the reference implementation once that's stable.
#for i in `find imgs/ -name "*.jpg"`; do cavif $i --speed=6; done;
#for i in `find img/ -name "*.png"`; do cavif $i --speed=6; done

# Rename from double *.png.webp and *.png.avif to *.webp and *.avif
#rename "s/\.png.webp$/.webp/" *.webp
#rename "s/\.png.avif$/.avif/" *.avif
#rename "s/\.jpg.webp$/.webp/" *.webp
#rename "s/\.jpg.avif$/.avif/" *.avif