#!/bin/bash

# ASCII 7x5 font map (each char has 7 rows of 5 pixels)
declare -A CHAR_MAP

CHAR_MAP[E]="##### #.... ##### #.... ##### ..... ....."
CHAR_MAP[X]="#...# #...# .#.#. ..#.. .#.#. #...# #...#"
CHAR_MAP[T]="##### ..#.. ..#.. ..#.. ..#.. ..... ....."
CHAR_MAP[R]="####. #...# ####. #.#.. #..#. #...# #...#"
CHAR_MAP[A]=".###. #...# #...# ##### #...# #...# #...#"
CHAR_MAP[P]="####. #...# ####. #.... #.... ..... ....."
CHAR_MAP[O]=".###. #...# #...# #...# #...# #...# .###."
CHAR_MAP[L]="#.... #.... #.... #.... ##### ..... ....."

WORD="EXTRAPOLO"
COMMITS_PER_PIXEL=5
OUTPUT_FILE="extrapolo.txt"
START_DATE=$(date -v -364d "+%Y-%m-%d")  # Start exactly 52 weeks ago

# Ensure we are inside a Git repo
if [ ! -d .git ]; then
  echo "⚠️ You must run this inside a Git repository"
  exit 1
fi

touch "$OUTPUT_FILE"

# Loop over each character
for ((c=0; c<${#WORD}; c++)); do
  CHAR=${WORD:$c:1}
  IFS=' ' read -r -a lines <<< "${CHAR_MAP[$CHAR]}"

  for ((row=0; row<7; row++)); do
    line="${lines[$row]}"
    for ((col=0; col<5; col++)); do
      pixel="${line:$col:1}"
      if [[ "$pixel" == "#" ]]; then
        week_offset=$((c * 6 + col))
        day_offset=$((week_offset * 7 + row))
        commit_date=$(date -v +"${day_offset}"d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%dT12:00:00")

        for ((k=0; k<COMMITS_PER_PIXEL; k++)); do
          echo "Pixel $row,$col at $commit_date" >> "$OUTPUT_FILE"
          git add "$OUTPUT_FILE"
          GIT_AUTHOR_DATE="$commit_date" GIT_COMMITTER_DATE="$commit_date" \
          git commit -m "Pixel $c:$row,$col"
        done
      fi
    done
  done
done

echo -e "\n✅ Done! Now push with:"
echo "git push origin main"
