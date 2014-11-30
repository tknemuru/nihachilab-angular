# coding: utf-8
title_jas = []
title_ens = []
description_jas = []
description_ens = []
thumbnail_paths = []
video_ids = []
views = []
desc = StringIO.new

# No.1 ---------------------------------
title_jas.push("トウモロコシ早食いの裏技をあみだした男")
title_ens.push("Epic Win Corn Eating Speed Record")
desc = StringIO.new
desc << "男が手にしているのはトウモロコシとドリル。"
desc << "ドリルの回転部分にトウモロコシを突き刺し、ドリルをスイッチオン！！"
desc << "その回転を活かし男は一気にトウモロコシをむさぼり食う！"
desc << "決して奇麗な食べ方ではないが早食いのアイデアとしてはGOOD。"
description_jas.push(desc.string)
description_ens.push("")
thumbnail_paths.push("morokoshi.png")
views.push(100)
video_ids.push("tQualAPjWS0")

# No.2 ---------------------------------
title_jas.push("バイクを雌牛と間違えてあらぬ行為に出た雄牛")
title_ens.push("Bull make love to a bike")
desc = StringIO.new
desc << "一匹の雄牛とバイク。一見接点の無いこの２つだが雄牛は何を思ったのか"
desc << "バイク後方から「アノ」体勢に！"
desc << "なんとバイクが雌牛に見えたのか、後尾を始めたのだ。"
desc << "確かにそういわれてみると形は似てなくもない・・・"
description_jas.push(desc.string)
description_ens.push("")
thumbnail_paths.push("ushi.png")
views.push(1000)
video_ids.push("3uKvP4U3izA")

# No.3 ---------------------------------
title_jas.push("忍者マスター捨て身の挑戦！果たして結果は…？")
title_ens.push("Ninja master fail")
desc = StringIO.new
desc << "自らを忍者マスターと名乗る見るからに怪しい男。"
desc << "何と鼻に差し込んだ爆竹をそのまま爆発させるという。"
desc << "「家でまねしちゃ駄目だぞ。私は忍者マスターだからね。」"
desc << "そう言って着火！"
desc << "結果は言うまでもなく男は悶絶…　一体忍者を何だと思っているのだろうか…"
description_jas.push(desc.string)
description_ens.push("")
thumbnail_paths.push("ninja.png")
views.push(10)
video_ids.push("PWh9WnSkiew")

# データ作成
0.upto(title_jas.length - 1) do |i|
  Video.create(
    title_ja: title_jas[i],
    title_en: title_ens[i],
    description_ja: description_jas[i],
    description_en: description_ens[i],
    thumbnail_path: thumbnail_paths[i],
    video_id: video_ids[i],
    views: views[i]
  )
end
