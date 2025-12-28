from preprocess import prepare_autoencoder_data

X, scaler = prepare_autoencoder_data()
print("Data shape:", X.shape)
print("Sample row:", X[0])
