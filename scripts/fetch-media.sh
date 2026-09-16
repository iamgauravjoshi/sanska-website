#!/usr/bin/env bash
# Downloads licensed stock imagery (Unsplash license / Pexels license) and converts to optimized WebP.
set -u
cd "$(dirname "$0")/.."
IMGDIR="public/images"
MANIFEST="/tmp/media.jsonl"
: > "$MANIFEST"

dl() { # name unsplash_id w h alt author crediturl
  local name="$1" id="$2" w="$3" h="$4" alt="$5" author="$6" credit_="$7"
  local src="https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=72&fm=jpg"
  if ! curl -sf -m 60 "$src" -o "/tmp/${name}.jpg"; then echo "FAIL $name"; return 1; fi
  convert "/tmp/${name}.jpg" -resize "${w}x${h}^" -gravity center -extent "${w}x${h}" -quality 72 -define webp:method=6 "${IMGDIR}/${name}.webp" || { echo "CONVFAIL $name"; return 1; }
  rm -f "/tmp/${name}.jpg"
  local bytes=$(stat -c%s "${IMGDIR}/${name}.webp")
  printf '{"slot":"%s","file":"/images/%s.webp","w":%d,"h":%d,"alt":"%s","author":"%s","creditUrl":"%s","bytes":%d}\n' "$name" "$name" "$w" "$h" "$alt" "$author" "$credit_" "$bytes" >> "$MANIFEST"
  echo "OK $name ${bytes}B"
}

dl industry-marine        photo-1605745341112-85968b19335b 800 600 "Container ship at sea during daylight" "Ian Taylor" "https://unsplash.com/photos/jOqJbvo1P9g"
dl industry-construction   photo-1541888946425-d81bb19240f5 800 600 "Tower cranes at a large construction project at dusk" "" "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
dl industry-oilgas         photo-1588011930968-eadac80e6a5a 800 600 "Refinery structures against the evening sky" "Maksym Kaharlytskyi" "https://unsplash.com/photos/u13zBF4r56A"
dl industry-healthcare     photo-1517120026326-d87759a7b63b 800 600 "Healthcare professional in scrubs walking a hospital corridor" "Hush Naidoo Jade Photography" "https://unsplash.com/photos/ZCO_5Y29s8k"
dl industry-hospitality    photo-1566073771259-6a8506099945 800 600 "Hotel resort poolside at a hospitality property" "" "https://images.unsplash.com/photo-1566073771259-6a8506099945"
dl industry-security       photo-1761410364691-349a27d7480f 800 600 "Uniformed security officer standing at a site gate booth" "Alhasan Husni" "https://unsplash.com/photos/sAuFAr8BBZo"
dl industry-facility       photo-1581578731548-c64695cc6952 800 600 "Facility services crew member cleaning an office corridor" "" "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
dl about-workforce         photo-1504307651254-35680f356dfd 1100 1300 "Steel-frame construction of a high-rise building" "" "https://images.unsplash.com/photo-1504307651254-35680f356dfd"
dl cta-welder              photo-1518709268805-4e9042af9f23 1920 900 "Welder with sparks flying at an industrial workshop" "" "https://images.unsplash.com/photo-1518709268805-4e9042af9f23"
dl global-dubai            photo-1512453979798-5ea266f8880c 1000 700 "Modern GCC city skyline with high-rise towers" "" "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
dl global-mauritius        photo-1513415277900-a62401e19be4 800 600 "Aerial view of a tropical island coastline" "Xavier Coiffic" "https://unsplash.com/photos/ByAHlRiTQjo"
dl employers-port          photo-1590496793907-4d66e2994b4d 1920 1000 "Container terminal with gantry cranes loading a ship at dusk" "Timelab" "https://unsplash.com/photos/yx20mpDyr2I"
dl candidates-flight       photo-1436491865332-7a61a109cc05 1600 900 "Airliner taxiing past the terminal at dusk" "" "https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
dl services-engineer       photo-1581094794329-c8112a89af12 1000 700 "Field engineer reviewing data on a tablet at an industrial site" "" "https://images.unsplash.com/photo-1581094794329-c8112a89af12"
dl process-planning        photo-1454165804606-c3d57bc86b40 1200 800 "Workforce planning documents and notes on a desk" "Austin Distel" "https://unsplash.com/photos/_JsmR4dQzU"
dl blueprints              photo-1503387762-592deb58ef4e 1000 700 "Architectural blueprints on a construction site" "Patrick Tomasso" "https://unsplash.com/photos/kYeeXNzp7Zc"
dl heavy-equipment         photo-1503708928676-1cb796a0891e 1000 700 "Excavator operating at an earthworks site" "Jamar Penny" "https://unsplash.com/photos/ZgmGq_eFmUs"
dl healthcare-staff        photo-1584432810601-6c7f27d2362b 1000 700 "Nurse in uniform with stethoscope" "JESHOOTS.COM" "https://unsplash.com/photos/l0j0DHVWcIE"
dl projects-portnight      photo-1621697944804-d0a393f7e01a 1920 1000 "Cargo vessels moored at a working port at night" "Razvan Mirel" "https://unsplash.com/photos/lkf7R1hMF7Y"
dl hospitality-kitchen       photo-1561122081-f1ee173c024b 1000 700 "Kitchen team member preparing dough in a professional kitchen" "Louis Hansel" "https://unsplash.com/photos/AUcmx7fGjtU"
dl india-taj               photo-1524492412937-b28074a5d7da 800 1000 "The Taj Mahal in Agra, India" "" "https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
dl airport-departures      photo-1436491865332-7a61a109cc05 800 600 "International terminal aircraft movement at golden hour" "" "https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
dl security-patrol         photo-1652739758426-56a564265f9e 1000 700 "Security officer on patrol along a perimeter" "Krzysztof Hepner" "https://unsplash.com/photos/_D6rTxw4HAI"

# ---- Hero video (Pexels license) ----
echo "== video =="
curl -sf -m 300 "https://videos.pexels.com/video-files/16227945/16227945-hd_1280_720_25fps.mp4" -o /tmp/hero-src.mp4 && echo "video downloaded $(stat -c%s /tmp/hero-src.mp4)B" || echo "VIDEO FAIL"
FF=$(python3 -c "import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())")
if [ -f /tmp/hero-src.mp4 ]; then
  "$FF" -y -loglevel error -i /tmp/hero-src.mp4 -t 16 -vf "scale=1280:720,fps=24" -c:v libx264 -crf 30 -preset veryfast -profile:v high -pix_fmt yuv420p -movflags +faststart -an public/video/hero.mp4
  "$FF" -y -loglevel error -i public/video/hero.mp4 -ss 2 -frames:v 1 /tmp/poster.jpg
  convert /tmp/poster.jpg -resize 1600x900^ -quality 74 -define webp:method=6 public/video/hero-poster.webp
  # also copy frame as jpg fallback poster
  convert /tmp/poster.jpg -resize 1600x900^ -quality 70 public/video/hero-poster.jpg
  echo "VIDEO OK $(stat -c%s public/video/hero.mp4)B"
  printf '{"slot":"hero-video","file":"/video/hero.mp4","poster":"/video/hero-poster.webp","posterFallback":"/video/hero-poster.jpg","alt":"","author":"Pexels contributor","creditUrl":"https://www.pexels.com/video/an-aerial-view-of-a-construction-site-with-a-crane-16227945/","bytes":%d}\n' "$(stat -c%s public/video/hero.mp4)" >> "$MANIFEST"
fi
curl -sf -m 60 "https://images.pexels.com/videos/16227945/pexels-photo-16227945.jpeg?auto=compress&cs=tinysrgb&w=1920" -o /tmp/vposter.jpg && convert /tmp/vposter.jpg -resize 1920x1080^ -quality 72 -define webp:method=6 public/video/hero-poster.webp && echo "POSTER OK"
du -sh public/images public/video 2>/dev/null; echo DONE
