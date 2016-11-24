def callback_next():
    snowboydecoder.play_audio_file(snowboydecoder.DETECT_DING)
    print ("[next]", requests.get(config['url'] + "/next"))

def callback_back():
    snowboydecoder.play_audio_file(snowboydecoder.DETECT_DONG)
    print ("[back]", requests.get(config['url'] + "/back"))

models = ['k-next.pmdl','k-back.pmdl']
sensitivity = [0.29,0.35]

detector = snowboydecoder.HotwordDetector(models, sensitivity = sensitivity)
print('Listening... Press Ctrl+C to exit')

callbacks = [ callback_next, callback_back ]
detector.start(detected_callback=callbacks,
               interrupt_check=interrupt_callback,
               sleep_time=0.03)
detector.terminate()