---
author: Sat Naing
pubDatetime: 2022-09-23T15:22:00Z
modDatetime: 2025-06-13T16:52:45.934Z
title: たった今、Claude Code に音声モードが登場！
slug: adding-new-posts-in-astropaper-theme
featured: true
draft: ture
ogImage: ../../assets/images/forrest-gump-quote.png
tags:
  - docs
description:
  Some rules & recommendations for creating or adding new posts using AstroPaperr
  theme.
---

スペースキーを長押しして話し、手を離すと音声がターミナル上のコマンドに変換され、AIが自動的にコードを書き始める。これがClaude Codeがローンチしたばかりの「音声モード」だ。
昨日、AnthropicのエンジニアであるThariq Shihiparがこの機能をツイートし、320万回もの閲覧数を記録した。現在はユーザーの5%に対して公開されており、今後数週間で全ユーザーに展開される予定だ。

ターミナルで /voice と入力すると機能が有効になり、スペースキーを長押して話し、手を離すと送信される。トランシーバーと同じ操作感覚である。
途中まで文字でプロンプトを入力し、言葉に詰まる部分だけスペースキーを長押しして口頭で補足し、手を離したら再び文字入力を続けることもできる。
音声認識結果はカーソル位置にそのまま挿入され、既存の内容を上書きすることはない。文字入力と音声入力をシームレスに切り替えられる。
例えばClaude CodeにAPIを作成させたい場合、音声なら10秒で伝えられるが、文字入力では1分かかる上に疲労も大きい。
Vibe codingの次なる進化形は、まさにvoice codingだ。

通称「口でコーディングする」方式。
音声のトークン利用は無料で利用枠を消費しないため、好きなだけ話せる。
Claude Pro、Max、Teamおよび企業版サブスクリプションで追加料金なしで利用可能だ。

昨年5月にClaude Appに実装された音声チャットとは異なる。
前者は汎用的な会話機能だが、今回の機能はプログラミングシーン向けに特化し、ターミナル上で動作する。

Thariq ShihiparはMITメディアラボ出身で、創業した企業がHubSpotに買収され、別のゲーム会社はYC（Y Combinator）に参入して1700万ドルの資金調達を達成している。
現在はAnthropicでClaude Codeを担当している。

昨年Claude Appに音声モードが実装された際、Djangoフレームワークの共同創設者Simon WillisonがAnthropicの利用規約から、テキスト読み上げの基盤にElevenLabsが使われていることを明らかにしていた。
ただしClaude Codeの音声モードはApp版と異なり、音声→テキストの変換のみを行い、音声での返答は行わない。

アーリーユーザーのフィードバックによると、技術用語の認識精度は予想以上に高い。
async/await、React hook、SQL joinなども正確に文字起こしできるという。
実測ではClaude AppとWeb版の音声モードはすでに中国語に対応しているものの、発音は非常に不自然だ。
一方、Claude Codeの音声モードが中国語に対応しているかどうかは未検証（筆者はまだ機能提供を受けていない）。

OpenAIのCodexは2月26日にすでに音声入力機能をローンチしており、Claude Codeより1週間早かった。
同様にスペースキー長押しで発音、手離しで文字起こしと、操作方法はほぼ同一だ。
ただしCodexの音声機能は開発中のため、設定ファイルに features.voice_transcription = true を手動で記述しないと利用できない。
Claude Codeは /voice コマンド一つで有効化できる。

もう一つ細かい点として、OpenAIは数時間前にCodexの公式Windows版をリリースしたばかりで、必要なユーザーはすぐに利用できる。

Claude Codeは誕生からわずか1年で爆発的に普及した。
調査機関SemiAnalysisの試算では、GitHub上の公開コミット25回に1回はClaude Codeが作成したコードだという。

1年前は「研究プレビュー」版に過ぎなかったが、これまでに176回のアップデートを重ね、年間換算収入は25億ドルに達し、
週間アクティブユーザーは年初から倍増している。

Anthropicは2月に300億ドル規模のGラウンド資金調達を実施し、評価額は3800億ドルに達した。数カ月前は1830億ドルだった。
規制による利用制限を受けた直後に、App Storeでダウンロード1位に躍り出たという波乱の展開もあった。

GitHubには#2116というIssueが存在し、2025年6月の段階で開発者から「Claude Codeに音声モードがついたら神モードだ」という要望が上がっていた。
それから9か月後、その機能はたった1つのスペースキーに集約されたのである。
